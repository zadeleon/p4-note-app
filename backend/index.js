import app from "./app.js";
import userRoute from "./routes/users.js";

app.get('/', (req, res) => {
    res.send('Hello, this is the root endpoint!');
  });

app.use('/user',userRoute);

app.listen(app.get('port'), function () {
  console.log(`App is listening to port ${app.get('port')}`);
});