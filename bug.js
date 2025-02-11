In a Firebase project, I encountered an issue where data wasn't updating correctly in Realtime Database.  The `on('value', ...)` listener seemed to be triggering only once, even with changes to the data.  The code looked like this:

```javascript
const database = firebase.database();
const ref = database.ref('myData');

ref.on('value', (snapshot) => {
  console.log(snapshot.val());
});

// ... later, data is updated in the database ...
```
The `console.log` only printed the initial data, not subsequent updates.