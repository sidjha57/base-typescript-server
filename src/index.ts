async function hello (): Promise<number> {
  setTimeout(() => {
    console.log('Hello World');
  }, 1000);
  return 1;
}

await hello();
export { hello };
