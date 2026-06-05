---
layout: page
title: MemoryLane
description: "Automatic Image Colorization · Computer Vision · Generative Models"
importance: 2
category: work
selected: true
year: 2026
tech: [PyTorch, ConvNeXt, U-Net, PatchGAN, VGG]
github: https://github.com/Minamotooo/MemoryLane
bullets:
  - "Framed grayscale-to-color mapping as a <strong>conditional image generation</strong> problem in the <strong>CIELab color space</strong>, building a <strong>ConvNeXt-Base encoder–U-Net decoder</strong> with a <strong>PatchGAN discriminator</strong>; addressed the gray-mean bias endemic to <strong>deep colorization models</strong> via colorfulness-filtered training data (~518K Places365 images) and a composite <strong>perceptual + adversarial loss</strong> (VGG + PatchGAN) — surpassing ground-truth colorfulness (40.9 vs. 36.9) and generalizing to real family photographs."
---
