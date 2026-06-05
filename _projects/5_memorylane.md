---
layout: page
title: MemoryLane
description: One-click black-and-white photo colorization using deep learning
importance: 2
category: work
selected: true
year: 2026
tech: [PyTorch, ConvNeXt, U-Net, PatchGAN, VGG]
github: https://github.com/Minamotooo/MemoryLane
bullets:
  - Built a deep learning colorizer that predicts chrominance (a*, b*) from grayscale luminance in the CIELab color space, tackling the desaturation problem of prior models through a ConvNeXt-Base encoder, colorfulness-filtered training data (top 28.7% of Places365 ~518K images), and a multi-component adversarial loss — achieving a colorfulness score of 40.9 vs. ground truth 36.9, and generalizing to real family photographs.
---
