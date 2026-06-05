---
layout: page
title: MemoryLane
description: Deep Learning Black-and-White Photo Colorization
importance: 2
category: work
selected: true
year: 2026
tech: [PyTorch, ConvNeXt, U-Net, PatchGAN, VGG]
github: https://github.com/Minamotooo/MemoryLane
bullets:
  - Colorizes black-and-white photographs by predicting chrominance channels in the CIELab color space using a ConvNeXt-Base encoder with a U-Net decoder and PatchGAN discriminator.
  - Countered the gray-mean bias of prior models by filtering the Places365 dataset to the top 28.7% most vibrant images (~518K) and applying a multi-component loss combining rebalanced MSE, VGG perceptual loss, and PatchGAN adversarial loss.
  - Achieved a colorfulness score of 40.9 on test images, surpassing ground truth (36.9), and validated results on real family photographs.
---
