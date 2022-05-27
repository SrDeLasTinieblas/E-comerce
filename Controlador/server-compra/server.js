const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
//const stripe = new Stripe('pi_3K0Dn6H8j9vZp3HQ0Q9JIyKN_secret_dJSb1kI99fmpQdv5Wiln16lok');
const stripe = new Stripe("sk_test_51K1HxzInA4seMnObqljmh8wtPw2tS3RTIOYGdMIehahSp2cA3m1wDiYBtzt2JUtqghHwM4fz0idI74PoNIURAKjA00T1XLINJ8")

app.use(cors());
//{origin: 'http://localhost:3005'}
app.use(express.json());

app.post('/api/checkout', async (req, res) => {
    try {
        const { id, amount } = req.body

    const payment = await stripe.paymentIntents.create({
        amount, //req.body.amount,
        currency: 'usd',
        description: " Esto es una descripcion :3",
        payment_method: id,
        confirm: true
    });
    console.log(req.body);
    res.send('recibido')
    res.send(payment)
    res.send({message: 'Succesfull payment'})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }

});

app.listen( 3025, () => {
    console.log('Server started');
});