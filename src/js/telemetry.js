let gameState = {
    floor: 1,
    torch: 42,
    sanity: 100,
    inventory: [],
    currentSceneId: 'start'
};

const ITEMS_DB = {
    'sacred_oil': { name: 'Sacred Oil', icon: 'fa-bottle-droplet', desc: 'Restores your torch energy by +35%.', effect: 'use_oil' },
    'bone_key': { name: 'Bone Key', icon: 'fa-key', desc: 'An ancient key carved from bone to unlock dungeon gates.', effect: 'none' },
    'mirror_shard': { name: 'Mirror Shard of Truth', icon: 'fa-diamond', desc: 'Protects your mind against terrifying hallucinations.', effect: 'none' },
    'relic_hope': { name: 'Relic of Hope', icon: 'fa-shield-halved', desc: 'Inscribed with the sacred crest of the Veiled Lady.', effect: 'none' }
};

function updateHUD() {
    document.getElementById('hud-floor').innerText = gameState.floor;
    document.getElementById('hud-torch').innerText = `${gameState.torch}%`;
    document.getElementById('hud-sanity').innerText = `${gameState.sanity}%`;
    document.getElementById('inv-count').innerText = gameState.inventory.length;

    const overlay = document.getElementById('darkness-overlay');
    if (gameState.torch < 35) {
        overlay.style.opacity = (1 - (gameState.torch / 35)).toFixed(2);
    } else {
        overlay.style.opacity = '0';
    }
}

function updateTorch(amount) {
    gameState.torch = Math.max(0, Math.min(100, gameState.torch + amount));
    updateHUD();
}

function updateSanity(amount) {
    gameState.sanity = Math.max(0, Math.min(100, gameState.sanity + amount));
    updateHUD();
}

function addItem(itemKey) {
    if (!gameState.inventory.includes(itemKey)) {
        gameState.inventory.push(itemKey);
        updateHUD();
        const item = ITEMS_DB[itemKey];
        showToast(`Item acquired: ${item.name}`, item.icon);
    }
}

function showToast(msg, iconClass = 'fa-circle-info') {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').innerText = msg;
    document.getElementById('toast-icon').className = `fa-solid ${iconClass} text-amber-400`;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => { toast.classList.add('translate-y-20', 'opacity-0'); }, 3000);
}