var self = require('sdk/self');

// a dummy function, to show how tests work. 
// to see how to test this function, look at ../test/test-main.js
/*
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
*/

const { Sidebar } = require('sdk/ui/sidebar');
const { Hotkey } = require('sdk/hotkeys');

let visibility = true;

let sidebar = Sidebar({
  id: 'zestsidebar',
  title: 'Zest',
  url: self.data.url('data/zest-sidebar/index.html')
});

sidebar.show();

Hotkey({
  combo: 'alt-z',
  onPress: () => {
    if (visibility) {
      sidebar.hide();
      visibility = false;
    }
    else {
      sidebar.show();
      visibility = true;
    }
  }
});
