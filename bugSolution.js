The problem was solved by using `once('value')` to get the initial value and then `on('child_added', ...)` and `on('child_changed', ...)` to listen for changes. This method is more efficient for only receiving updates when something changes instead of receiving the entire data set on each update.

```javascript
const database = firebase.database();
const ref = database.ref('myData');

ref.once('value', (snapshot) => {
  console.log('Initial data:', snapshot.val());
});

ref.on('child_added', (snapshot) => {
  console.log('Child added:', snapshot.val());
});

ref.on('child_changed', (snapshot) => {
  console.log('Child changed:', snapshot.val());
});
```
This solution ensures that only updates are received, avoiding unnecessary processing and efficiently managing Realtime Database interactions.