import './slider'
import modals from './modules/modals'
import forms from './modules/forms'
import tabs from './modules/tabs'

window.addEventListener('DOMContentLoaded', () => {
  modals()
  forms()
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
})