import Control from './Control'
import Preview from './Preview'
import ARAssetEditorComponent from './ARAssetEditorComponent'

if (typeof window !== 'undefined') {
    window.ARAssetControl = Control
    window.ARAssetPreview = Preview
    window.ARAssetEditorComponent = ARAssetEditorComponent
}

export { Control as ARAssetControl, Preview as ARAssetPreview , ARAssetEditorComponent as ARAssetEditorComponent}