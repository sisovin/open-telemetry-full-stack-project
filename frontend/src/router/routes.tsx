import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersPage from '../features/users/UsersPage';
import CommentsPage from '../features/comments/CommentsPage';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from './ProtectedRoute';

const Routes: React.FC = () => {
  return (
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
      <ProtectedRoute path="/admin" component={AdminLayout} />
    </Switch>
  );
};

export default Routes;
