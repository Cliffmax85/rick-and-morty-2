import { Switch, Route } from "react-router-dom";
import List from "./views/Characters/List";
import styles from './App.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route path='/'>
          <List />
        </Route>
       </Switch>
    </div>
  );
}
