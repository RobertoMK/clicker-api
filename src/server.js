import app from './app.js';

const port = process.env.PORT || 3010;

try {
  app.listen(port, () => console.info(`Listening on port ${port}`));
} catch (error) {
  console.error(error);
  process.exit(1);
}