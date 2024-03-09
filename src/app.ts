import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import characterRoutes from './routes/character.routes';

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Success',
    status: {
      code: 200,
      text: 'OK',
    },
  });
});

app.use('/api/character', characterRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.path} not found.`,
    method: `${req.method}`,
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  res.status(500).json({
    message: 'Internal Server Error',
  });
});

export default app;
