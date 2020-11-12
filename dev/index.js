import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { ARAssetControl, ARAssetPreview , ARAssetEditorComponent} from '../src'

const config = {
    backend: {
        name: 'test-repo',
        login: false,
    },
    media_folder: 'assets',
    collections: [{
        name: 'arasset',
        label: 'Test',
        files: [{
            file: 'test.yml',
            name: 'arasset',
            label: 'Test',
            fields: [
                { name: 'test_widget', label: 'Test Widget', widget: 'arasset'},
                { name: 'body', label: 'Body', widget: 'markdown'},
            ],
        }],
    }],
}

CMS.registerWidget('arasset', ARAssetControl, ARAssetPreview)
CMS.registerEditorComponent(ARAssetEditorComponent)


init({ config })