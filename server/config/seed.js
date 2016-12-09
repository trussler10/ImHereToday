/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import Location from '../api/location/location.model';
import Cube from '../api/cube/cube.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
      + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
      + 'Stylus, Sass, and Less.'
    }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, '
        + 'AngularJS, and Node.'
      }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep '
        + 'tests alongside code. Automatic injection of scripts and '
        + 'styles into your index.html'
      }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more '
        + 'code reusability and maximum scalability'
      }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript '
        + 'payload, minifies your scripts/css/images, and rewrites asset '
        + 'names for caching.'
      }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku '
        + 'and openshift subgenerators'
      });
  });

Location.find({}).remove()
  .then(() => {
    Location.create(
      {
        name: 'Perficient Denver',
        cubes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74]
      }, {
        name: 'Perficient St Louis',
        cubes: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108]
      }
      , {
        name: 'Perficient St Houston',
        cubes: [109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
      }
    );
  });

Cube.find({}).remove()
  .then(() => {
    Cube.create(
      { cubeId: 1, name: 'Training Room 1' }
      , { cubeId: 2, name: 'Training Room 2' }
      , { cubeId: 3, name: 'Training Room 3' }
      , { cubeId: 4, name: 'Training Room 4' }
      , { cubeId: 5, name: 'Training Room 5' }
      , { cubeId: 6, name: 'Training Room 6' }
      , { cubeId: 7, name: 'Training Room 7' }
      , { cubeId: 8, name: 'Training Room 8' }
      , { cubeId: 9, name: 'Training Room 9' }
      , { cubeId: 10, name: 'Training Room 10' }
      , { cubeId: 11, name: 'Training Room 11' }
      , { cubeId: 12, name: 'Training Room 12' }
      , { cubeId: 13, name: 'Training Room 13' }
      , { cubeId: 14, name: 'Training Room 14' }
      , { cubeId: 15, name: 'Training Room 15' }
      , { cubeId: 16, name: 'Training Room 16' }
      , { cubeId: 17, name: 'Bullpen 1' }
      , { cubeId: 18, name: 'Bullpen 2' }
      , { cubeId: 19, name: 'Bullpen 3' }
      , { cubeId: 20, name: 'Bullpen 4' }
      , { cubeId: 21, name: 'Bullpen 5' }
      , { cubeId: 22, name: 'Bullpen 6' }
      , { cubeId: 23, name: 'Bullpen 7' }
      , { cubeId: 24, name: 'Bullpen 8' }
      , { cubeId: 25, name: 'Bullpen 9' }
      , { cubeId: 26, name: 'Bullpen 10' }
      , { cubeId: 27, name: 'Bullpen 11' }
      , { cubeId: 28, name: 'Bullpen 12' }
      , { cubeId: 29, name: 'Bullpen 13' }
      , { cubeId: 30, name: 'Bullpen 14' }
      , { cubeId: 31, name: 'Bullpen 15' }
      , { cubeId: 32, name: 'Bullpen 16' }
      , { cubeId: 33, name: 'Bullpen 17' }
      , { cubeId: 34, name: 'Bullpen 18' }
      , { cubeId: 35, name: 'Bullpen 19' }
      , { cubeId: 36, name: 'Bullpen 20' }
      , { cubeId: 37, name: 'Bullpen 21' }
      , { cubeId: 38, name: 'Bullpen 22' }
      , { cubeId: 39, name: 'Bullpen 23' }
      , { cubeId: 40, name: 'Bullpen 24' }
      , { cubeId: 41, name: 'Bullpen 25' }
      , { cubeId: 42, name: 'Bullpen 26' }
      , { cubeId: 43, name: 'Bullpen 27' }
      , { cubeId: 44, name: 'Bullpen 28' }
      , { cubeId: 45, name: 'Bullpen 29' }
      , { cubeId: 46, name: 'Cubicles 1' }
      , { cubeId: 47, name: 'Cubicles 2' }
      , { cubeId: 48, name: 'Cubicles 3' }
      , { cubeId: 49, name: 'Cubicles 4' }
      , { cubeId: 50, name: 'Offices 1' }
      , { cubeId: 51, name: 'Offices 2' }
      , { cubeId: 52, name: 'Offices 3' }
      , { cubeId: 53, name: 'Offices 4' }
      , { cubeId: 54, name: 'Offices 5' }
      , { cubeId: 55, name: 'Offices 6' }
      , { cubeId: 56, name: 'Offices 7' }
      , { cubeId: 57, name: 'Offices 8' }
      , { cubeId: 58, name: 'Offices 9' }
      , { cubeId: 59, name: 'Offices 10' }
      , { cubeId: 60, name: 'Offices 11' }
      , { cubeId: 61, name: 'Offices 12' }
      , { cubeId: 62, name: 'Offices 13' }
      , { cubeId: 63, name: 'Offices 14' }
      , { cubeId: 64, name: 'Offices 15' }
      , { cubeId: 65, name: 'Conference Room 1' }
      , { cubeId: 66, name: 'Conference Room 2' }
      , { cubeId: 67, name: 'Conference Room 3' }
      , { cubeId: 68, name: 'accounting Room 1' }
      , { cubeId: 69, name: 'accounting Room 2' }
      , { cubeId: 70, name: 'accounting Room 3' }
      , { cubeId: 71, name: 'IBM Analytics 1' }
      , { cubeId: 72, name: 'IBM Analytics 2' }
      , { cubeId: 73, name: 'IBM Analytics 3' }
      , { cubeId: 74, name: 'IBM Analytics 4' }
      , { cubeId: 75, name: 'Bullpen 1' }
      , { cubeId: 76, name: 'Bullpen 2' }
      , { cubeId: 77, name: 'Bullpen 3' }
      , { cubeId: 78, name: 'Bullpen 4' }
      , { cubeId: 79, name: 'Bullpen 5' }
      , { cubeId: 80, name: 'Bullpen 6' }
      , { cubeId: 81, name: 'Bullpen 7' }
      , { cubeId: 82, name: 'Bullpen 8' }
      , { cubeId: 83, name: 'Bullpen 9' }
      , { cubeId: 84, name: 'Bullpen 10' }
      , { cubeId: 85, name: 'Bullpen 11' }
      , { cubeId: 86, name: 'Bullpen 12' }
      , { cubeId: 87, name: 'Bullpen 13' }
      , { cubeId: 88, name: 'Bullpen 14' }
      , { cubeId: 89, name: 'Bullpen 15' }
      , { cubeId: 90, name: 'Bullpen 16' }
      , { cubeId: 91, name: 'Bullpen 17' }
      , { cubeId: 92, name: 'Bullpen 18' }
      , { cubeId: 93, name: 'Bullpen 19' }
      , { cubeId: 94, name: 'Bullpen 20' }
      , { cubeId: 95, name: 'Bullpen 21' }
      , { cubeId: 96, name: 'Bullpen 22' }
      , { cubeId: 97, name: 'Offices 1' }
      , { cubeId: 98, name: 'Offices 2' }
      , { cubeId: 99, name: 'Offices 3' }
      , { cubeId: 100, name: 'Offices 4' }
      , { cubeId: 101, name: 'Offices 5' }
      , { cubeId: 102, name: 'Offices 6' }
      , { cubeId: 103, name: 'Offices 7' }
      , { cubeId: 104, name: 'Offices 8' }
      , { cubeId: 105, name: 'Offices 9' }
      , { cubeId: 106, name: 'Offices 10' }
      , { cubeId: 107, name: 'Offices 11' }
      , { cubeId: 108, name: 'Offices 12' }
      , { cubeId: 109, name: 'Bullpen 1' }
      , { cubeId: 110, name: 'Bullpen 2' }
      , { cubeId: 111, name: 'Bullpen 3' }
      , { cubeId: 112, name: 'Bullpen 4' }
      , { cubeId: 113, name: 'Bullpen 5' }
      , { cubeId: 114, name: 'Bullpen 6' }
      , { cubeId: 115, name: 'Bullpen 7' }
      , { cubeId: 116, name: 'Bullpen 8' }
      , { cubeId: 117, name: 'Bullpen 9' }
      , { cubeId: 118, name: 'Bullpen 10' }
      , { cubeId: 119, name: 'Bullpen 11' }
      , { cubeId: 120, name: 'Bullpen 12' }
      , { cubeId: 121, name: 'Bullpen 13' }
      , { cubeId: 122, name: 'Bullpen 14' }
      , { cubeId: 123, name: 'Bullpen 15' }
      , { cubeId: 124, name: 'Bullpen 16' }
      , { cubeId: 125, name: 'Bullpen 17' }
      , { cubeId: 126, name: 'Bullpen 18' }
      , { cubeId: 127, name: 'Bullpen 19' }
      , { cubeId: 128, name: 'Bullpen 20' }
      , { cubeId: 129, name: 'Bullpen 21' }
      , { cubeId: 130, name: 'Bullpen 22' }
      , { cubeId: 131, name: 'Offices 1' }
      , { cubeId: 132, name: 'Offices 2' }
      , { cubeId: 133, name: 'Offices 3' }
      , { cubeId: 134, name: 'Offices 4' }
      , { cubeId: 135, name: 'Offices 5' }
      , { cubeId: 136, name: 'Offices 6' }
      , { cubeId: 137, name: 'Offices 7' }
      , { cubeId: 138, name: 'Offices 8' }
      , { cubeId: 139, name: 'Offices 9' }
      , { cubeId: 140, name: 'Offices 10' }
      , { cubeId: 141, name: 'Offices 11' }
      , { cubeId: 142, name: 'Offices 12' }
      , { cubeId: 143, name: 'Conference Room 1' }
      , { cubeId: 144, name: 'Conference Room 2' }
    );
  });
