import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UsersPage from '../features/users/UsersPage';
import CommentsPage from '../features/comments/CommentsPage';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/users">
            <MainLayout>
              <UsersPage />
            </MainLayout>
          </Route>
          <Route path="/comments">
            <AdminLayout>
              <CommentsPage />
            </AdminLayout>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
