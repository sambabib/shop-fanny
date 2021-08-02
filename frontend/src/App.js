import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// @Screens
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';

// @components
import Navbar from './components/Navbar/Navbar';
// import BackDrop from './components/BackDrop/BackDrop';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  const [sideDrawerToggle, setSideDrawerToggle] = useState(false);
  const handleSideToggle = () => {
    setSideDrawerToggle(true);
  };

  return (
    <Router>
      <Navbar handleSideToggle={handleSideToggle} />
      {/* <BackDrop /> */}
      <SideDrawer
        sideDrawerToggle={sideDrawerToggle}
        close={() => setSideDrawerToggle(false)}
      />
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
