import Campsites from './containers/Campsites.jsx';
import CampsitesAdmin from './containers/CampsitesAdmin.jsx';
import CampsitesAdminReview from './containers/CampsitesAdminReview.jsx';
import CreateCampsite from './containers/CreateCampsite.jsx';
/*
 * show campsites /campsites
 * show admin interface /campsites/admin
 * create new campsite /campsites/new
 */

export default {
  childRoutes: [
    {
      path: 'campsites',
      component: Campsites
    },
    {
      path: 'campsites/new',
      component: CreateCampsite
    },
    {
      path: 'campsites/admin',
      component: CampsitesAdmin
    },
    {
      path: 'campsites/admin/edit/:id',
      component: CampsitesAdminReview
    },
    {
      path: 'campsites/admin/approve',
      component: CampsitesAdminReview
    }
  ]
};
