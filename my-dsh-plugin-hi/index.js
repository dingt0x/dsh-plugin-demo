export const name = 'my-dsh-plugin-hi';

export function apply(ctx, config = {}) {
  const target = config.target || 'World';
  console.log(`\n🎉 [Plugin-Hi] 插件成功加载！Hi，${target}！\n`);
}
