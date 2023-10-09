import { $, $$ } from '@wdio/globals'
import Page from './page.js'

class InventoryPage extends Page {
    
    get title () {
        return $('.title')
    }

    get items () {
        return $$('.inventory_item')
    }
}

export default new InventoryPage()
