---
layout: page
title: Bengali Long-Form ASR and Diarization
description: "Speech Recognition · Speaker Diarization · Low-Resource NLP"
importance: 1
category: work
selected: true
year: 2026
tech: [PyTorch, Whisper, Pyannote, Silero VAD, whisper-timestamped]
github: https://github.com/Minamotooo/Luck-Is-All-You-Need-DL-Sprint-4.0
bullets:
  - "Built for a Kaggle competition on Bengali long-form <a href='https://www.kaggle.com/competitions/dl-sprint-4-0-bengali-long-form-speech-recognition/leaderboard' target='_blank'>ASR</a> and <a href='https://www.kaggle.com/competitions/dl-sprint-4-0-bengali-speaker-diarization-challenge/leaderboard' target='_blank'>Diarization</a>, tackling <strong>low-resource Natural Language Processing</strong> for a language with no off-the-shelf speech tooling."
  - "For ASR, built <strong>WhisperAlign</strong> — a word-boundary-aware chunker, requiring no external tools or boundary annotations, that extracts per-word timestamps from Whisper's own <strong>cross-attention alignment heads</strong> and greedily assembles fixed-length segments that never break mid-word; used the resulting chunks to fine-tune a <strong>Whisper-medium Bengali ASR model</strong>."
  - "For diarization, domain-adapted <strong>Pyannote</strong> for Bengali speaker diarization by fine-tuning only its <strong>segmentation head</strong> on Bengali conversational audio, teaching the model local speech rhythm and turn-taking patterns without disturbing the language-agnostic embedding space; paired it with a <strong>Dual-VAD intersection</strong> (Pyannote ∩ Silero VAD) that retains only segments confirmed by an independent speech boundary detector."
  - "<a href='https://arxiv.org/abs/2603.04809' target='_blank'><i class='ai ai-arxiv' style='margin-right: 3px;'></i>Paper</a>"
---