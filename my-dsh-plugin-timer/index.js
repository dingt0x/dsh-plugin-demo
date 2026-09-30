export const name = 'my-dsh-plugin-timer';

export function apply(ctx, config) {
  const startTime = new Date().toISOString();
  console.log(`⏱️ [Plugin-Timer] 系统启动打点记录: ${startTime}\n`);
}
