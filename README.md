# dsh-plugin-demo

A lightweight playground featuring minimal plugins and bundle implementations designed to demonstrate and explore the dynamic loading flow and patching architecture of **DeepSeek Harness (dsh)**.

## 🎯 Purpose
This repository provides a step-by-step, transparent reference for understanding how DeepSeek Harness composes its execution tree at runtime:
- **Minimal Plugin Contracts**: Implementing the lightweight Cordis `apply(ctx, config)` entry point.
- **Bundle Composition**: Packaging plugins and declaring incremental `cordis.patch.yml` rules.
- **Profile Integration**: Demonstrating how plugins are dynamically injected, overridden, or enabled within the runtime configuration tree.
