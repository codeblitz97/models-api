import character, { authorize } from './module/character';
import app from './app';

let PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  await authorize();
  console.log(`Server started on`, PORT);
});
