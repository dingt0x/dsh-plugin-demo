export const name = 'my-dsh-plugin-hello';

export function apply(ctx, config = {}) {
  const target = config.target || 'World';
  console.log(`\n🎉 [Plugin-Hello] 插件成功加载！Hello，${target}！\n`);
}
