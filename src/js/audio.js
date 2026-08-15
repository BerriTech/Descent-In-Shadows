class RetroAudioEngine {
    constructor() {
        this.ctx = null;
        this.muted = false;
        this.bgOsc = null;
        this.bgGain = null;
    }

    init() {
        if (this.ctx) return;
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
        this.startAmbientDrone();
    }

    playClick() {
        if (this.muted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220 + Math.random() * 120, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.04);
        } catch(e) {}
    }

    playSelect() {
        if (this.muted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(160, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.11);
        } catch(e) {}
    }

    startAmbientDrone() {
        if (this.muted || !this.ctx) return;
        try {
            this.bgOsc = this.ctx.createOscillator();
            this.bgGain = this.ctx.createGain();
            this.bgOsc.type = 'sawtooth';
            this.bgOsc.frequency.value = 50;
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 160;
            this.bgGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
            this.bgOsc.connect(filter);
            filter.connect(this.bgGain);
            this.bgGain.connect(this.ctx.destination);
            this.bgOsc.start();
        } catch(e) {}
    }

    toggleMute() {
        this.muted = !this.muted;
        if (this.bgGain && this.ctx) {
            this.bgGain.gain.setValueAtTime(this.muted ? 0 : 0.02, this.ctx.currentTime);
        }
        return this.muted;
    }
}
const audio = new RetroAudioEngine();