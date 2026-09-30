export const name = 'my-dsh-plugin-greet';

export function apply(ctx, config) {
  const target = config.target || 'World';
  console.log(`\n🎉 [Plugin-Greet] 插件成功加载！你好，${target}！\n`);
}
