const STORY_TREE = {
    'start': {
        speaker: 'The Veiled Lady',
        graphic: 'statue',
        text: '"Yet here you are, in these dungeons of your own creation."',
        choices: [
            { text: 'Understand your fate', nextScene: 'ask_identity' },
            { text: 'Ignite torch', nextScene: 'look_around', torchCost: 10 }
        ]
    },
    // ... ادامه درخت داستان در اینجا (می‌توانید کپی کنید)
};

function typeWriter(text, callback) {
    // منطق تایپ‌رایتر
    const elDialogueText = document.getElementById('dialogue-text');
    elDialogueText.innerText = "";
    let idx = 0;
    let timer = setInterval(() => {
        if (idx < text.length) {
            elDialogueText.innerText += text.charAt(idx);
            idx++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, 20);
}

function loadScene(sceneId) {
    const scene = STORY_TREE[sceneId];
    gameState.currentSceneId = sceneId;
    // منطق تعویض صحنه و نمایش دکمه‌ها
    // (از همان کدهای اصلی استفاده کنید)
}