var self = require('sdk/self');

const { Sidebar } = require('sdk/ui/sidebar');
const { Hotkey } = require('sdk/hotkeys');
var FilePicker = require('filepicker-jetpack'),
    FileSaver  = require('filesaver-jetpack'),
    ZestRunner = require('zest-runner');

let visibility = true;

let sidebar = Sidebar({
  id: 'zestsidebar',
  title: 'Zest',
  url: self.data.url('zest-sidebar/index.html'),
  onAttach: function (worker) {
    worker.port.on('IMPORT', () => {
      let fp = new FilePicker({fileExtension: '.zst'});
      let z = fp.open('data');
      if (z) {
        worker.port.emit('RCV-IMPORT', z);
      }
      else {
        console.log('Error: Failed to import file');
      }
    });

    worker.port.on('SAVE', () => {
      let fs = new FileSaver({title: 'Save Zest',
                              fileExtension: '.zst'});
      fs.save();
    });
  }
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
