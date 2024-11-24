import { type Context, Hono } from 'hono';
import {serveStatic} from 'hono/bun';

const app = new Hono()

app.use('/*', serveStatic({root: './public'}));

app.get('/event-with-no-data', (c: Context) => {
    c.header('HX-Trigger', 'event1');
    return c.text('dispateched event1');
})


app.get('/event-with-string', (c: Context) => {
    const trigger = {event2: 'some string'};
    c.header('HX-Trigger', JSON.stringify(trigger));
    return c.text('dispateched event2');
})


app.get('/event-with-object', (c: Context) => {
    const trigger = {event3: {foo: 1, bar: 2}};
    c.header('HX-Trigger', JSON.stringify(trigger));
    return c.text('dispateched event3');
})

export default app
