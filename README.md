# Descent in Shadows

> **A dark psychological narrative game about guilt, suppressed memories, and the unconscious mind.**

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Genre](https://img.shields.io/badge/genre-Psychological%20Horror-black)
![Style](https://img.shields.io/badge/style-Pixel%20Art-purple)
![Architecture](https://img.shields.io/badge/architecture-Modular-blue)
![AI](https://img.shields.io/badge/AI-Experimental-orange)

---

## 🕯️ About the Game

**Descent in Shadows** is a dark, psychological, and philosophical narrative game about confronting the parts of yourself you tried to bury.

You awaken in the depths of a strange, pixelated abyss.

Standing before you is a mysterious, masked woman surrounded by a faint sacred light.

She tells you:

> *"Yet here you are, in these dungeons of your own creation."*

As you descend deeper into the dungeon, you gradually discover that this place is not a physical prison.

It is a manifestation of your own memories, regrets, decisions, and suppressed guilt.

The deeper you go, the harder it becomes to distinguish **reality from hallucination**.

---

## 🧠 Core Concept

The game explores several psychological themes:

* Guilt and self-punishment
* Suppressed memories
* Consciousness and the unconscious
* Truth vs. ignorance
* Free will and responsibility
* Identity
* Repetition and psychological loops

The central question of the game is:

> **What happens when you are forced to confront the person you have been trying to escape from — yourself?**

---

## 📖 Story

The player begins in a dark, pixelated dungeon with almost no understanding of how they arrived there.

A mysterious figure known as **The Veiled Lady** appears.

At first, she seems to be a divine protector.

As the player explores the dungeon, however, the meaning of the environment gradually changes.

The dungeon begins to reveal fragments of the player's past.

Rooms become distorted.

Memories become unreliable.

Dialogue changes.

Reality itself appears to break apart.

Eventually, the player discovers the true identity of the Veiled Lady:

> She is neither an angel nor a demon.

She is a manifestation of the player's own **conscience and self-punishing nature**.

The dungeon is a prison created by the player's own mind.

And the player must decide whether to face the truth, accept punishment, or disappear into the darkness.

---

# 🎮 Gameplay

The core gameplay loop is:

```text
Explore
   ↓
Discover
   ↓
Interact
   ↓
Dialogue
   ↓
Make Choices
   ↓
Change Game State
   ↓
Solve Puzzles
   ↓
Experience Hallucinations
   ↓
Face Consequences
   ↓
Reach an Ending
```

The player's decisions influence the state of the game and can lead to different outcomes.

---

## 🔥 Torch System

The torch represents **hope, awareness, and rationality**.

Its energy gradually decreases as the player explores the dungeon.

```text
High Torch
    ↓
Clear Environment

Low Torch
    ↓
Increased Darkness
    ↓
Visual Distortion
    ↓
Higher Psychological Pressure
```

The torch is therefore more than a resource — it is part of the game's narrative symbolism.

---

## 🧠 Sanity System

**Sanity** represents the player's ability to distinguish reality from their own psychological distortions.

As sanity decreases:

```text
100–70
Normal perception

70–40
Subtle distortions

40–20
Hallucinations

20–0
Reality collapse
```

Possible effects include:

* Distorted dialogue
* Visual glitches
* Unreliable environments
* Altered scenes
* Audio distortions
* Unexpected events

---

## 🪞 Items

The player can discover items that affect exploration and psychological events.

Current planned items include:

| Item                     | Purpose                               |
| ------------------------ | ------------------------------------- |
| 🕯️ Sacred Oil           | Restores torch energy                 |
| 🦴 Bone Key              | Unlocks certain dungeon gates         |
| 🪞 Mirror Shard of Truth | Helps resist or reveal hallucinations |
| 🛡️ Relic of Hope        | Connected to the Veiled Lady          |

---

# 🧩 Puzzles

Puzzles are integrated into the narrative rather than existing only as standalone challenges.

For example:

```text
Find Bone Key
      ↓
Discover Locked Gate
      ↓
Use Bone Key
      ↓
Access Deeper Floor
      ↓
Reveal New Memory
```

Puzzle solutions may also affect the player's psychological state and future story branches.

---

# 👁️ Hallucinations

Hallucinations are dynamic psychological events triggered by the player's state and decisions.

For example:

```text
Low Sanity
     +
Specific Room
     ↓
Hallucination Event
     ↓
Distorted Reality
     ↓
New Choice
     ↓
Possible Consequence
```

The goal is to make the player question whether an event actually happened.

---

# 🕯️ The Veiled Lady

The Veiled Lady is the central mysterious character of the game.

She initially appears to be a sacred or supernatural entity.

However, her role gradually changes as the player progresses.

She represents:

* Conscience
* Guilt
* Self-judgment
* Repressed memories
* The desire for punishment

Her true nature is revealed near the end of the story.

---

# 🔚 Endings

The game is planned around four major endings.

### 1. Awakening

The player maintains enough sanity and chooses to confront reality.

They escape the psychological prison and return to the real world.

### 2. Succession

The player accepts their punishment and takes the Veiled Lady's throne.

They become the next guardian of the dungeon.

### 3. Darkness

The player's sanity and perception collapse completely.

Their identity is consumed by the darkness.

### 4. The Eternal Loop

The player discovers that the events have happened before.

They realize that they are trapped in an endless cycle of self-punishment.

---

# 🏗️ Architecture

The project is being developed using a modular architecture.

```text
Descent in Shadows
│
├── Presentation Layer
│   ├── UI
│   ├── Animations
│   ├── Canvas
│   ├── Visual Effects
│   └── Audio
│
├── Game Core
│   ├── Game State
│   ├── State Machine
│   ├── Story Engine
│   ├── Choice System
│   ├── Sanity System
│   ├── Torch System
│   ├── Inventory
│   └── Puzzle System
│
├── Backend
│   ├── FastAPI
│   ├── Save / Load
│   └── Database
│
└── AI Layer
    ├── LLM Integration
    ├── Dynamic Dialogue
    ├── Psychological Events
    └── Experimental Narrative Generation
```

The architecture is designed so that gameplay logic, narrative content, UI, audio, and AI functionality can evolve independently.

---

# 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Canvas API
* Web Audio API

### Backend

* Python
* FastAPI
* REST API

### Data

* JSON
* PostgreSQL *(planned)*

### AI

* Large Language Models
* Prompt Engineering
* Structured LLM Outputs
* AI-assisted Dynamic Narrative *(experimental)*

### Development

* Git
* GitHub
* VS Code

---

# 📁 Project Structure

The project is being developed as a modular application rather than a single HTML file.

```text
descent-in-shadows/
│
├── index.html
│
├── src/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── audio.js
│   │   ├── telemetry.js
│   │   ├── story.js
│   │   └── game.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── sprites/
│   │   └── audio/
│   │
│   └── data/
│       ├── scenes/
│       ├── items/
│       └── puzzles/
│
├── backend/
│   ├── app/
│   └── tests/
│
├── docs/
│   ├── game-design.md
│   ├── architecture.md
│   └── story.md
│
├── README.md
└── .gitignore
```

---

# 🚧 Development Roadmap

## Milestone 1 — Playable Prototype

* [x] Initial prototype
* [x] Modular CSS
* [x] Audio engine
* [x] Basic game state
* [x] Initial story structure

### In Progress

* [ ] Start Scene
* [ ] Veiled Lady
* [ ] Floor 1
* [ ] 3–5 Rooms
* [ ] Dialogue System
* [ ] Choice System
* [ ] Sanity System
* [ ] Torch System
* [ ] One Puzzle
* [ ] One Hallucination
* [ ] One Ending

---

## Milestone 2 — Vertical Slice

* [ ] Multiple floors
* [ ] Expanded story branches
* [ ] Multiple puzzles
* [ ] Complete inventory system
* [ ] Advanced hallucinations
* [ ] Audio atmosphere
* [ ] Save / Load
* [ ] Multiple endings
* [ ] Improved visual effects

---

## Milestone 3 — AI-Powered Narrative

* [ ] LLM integration
* [ ] Dynamic Veiled Lady dialogue
* [ ] Context-aware narrative generation
* [ ] Psychological event generation
* [ ] Structured AI outputs
* [ ] AI evaluation
* [ ] Fallback mechanisms

---

## Milestone 4 — Release

* [ ] Full QA
* [ ] Performance optimization
* [ ] Responsive UI
* [ ] Deployment
* [ ] Documentation
* [ ] Final polish
* [ ] Public release

---

# 👥 Team

This is a collaborative project developed by two junior developers with different technical focuses.

### Eyna

**AI / Machine Learning / Game Logic**

Focus areas:

* Python
* Machine Learning
* AI / LLMs
* Game State
* Story Engine
* Backend
* AI-powered narrative systems

### Rayeh

**Full-Stack / Frontend / Game Interface**

Focus areas:

* JavaScript
* Frontend architecture
* UI/UX
* Canvas
* Animations
* Audio
* Backend integration
* Deployment

Both developers contribute to architecture, testing, Git workflow, and integration.

---

# 🎯 Project Goals

The goal of this project is not simply to build a game.

We aim to explore how:

**Narrative Design + Game Systems + AI**

can be combined to create a psychologically engaging interactive experience.

The project is also being developed as a practical exploration of:

* Modular software architecture
* Game state management
* Branching narratives
* AI-assisted storytelling
* Human–AI interaction
* Frontend game development
* Full-stack application development

---

# ⚠️ Project Status

**Early Development / Experimental**

The game is currently under active development.

Features, architecture, story elements, and gameplay mechanics may change significantly during development.

---

# 📜 License

This project is currently under development.

License information will be added before public release.
