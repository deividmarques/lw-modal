import { mount } from 'avoriaz'
import { expect } from 'chai'
import LwModal from '@/components/LwModal'

describe('LwModal Component', () => {
  describe('Watchs prop visible', () => {
    it('should data isVisible equal visible prop', () => {
      const wrapper = mount(LwModal, {
        propsData: { visible: false }
      })
      wrapper.setProps({
        visible: true
      })
      expect(wrapper.data().isVisible).to.equal(true)
    })
  })
  describe('when render component', () => {
    const wrapper = mount(LwModal, {
      propsData: { visible: true }
    })
    let modalContainer = wrapper.find('.ls-modal-box')[0]
    it('should has class ls-modal-box', () => {
      expect(modalContainer.hasClass('ls-modal-box')).to.equal(true)
    })
  })

  //   describe('when dont has prop type', () => {
  //     it('should has class .ls-modal-box', () => {
  //       setTimeout(() => {
  //         expect(wrapper.hasClass('ls-modal-box')).to.equal(true)
  //       }, 500)
  //     })
  //   })
  //   describe('when has has prop type equal small ', () => {
  //     it('should has class .ls-modal-small', () => {
  //       wrapper.setProps({
  //         type: 'small'
  //       })
  //       setTimeout(() => {
  //         expect(wrapper.hasClass('ls-modal-small')).to.equal(true)
  //       }, 500)
  //     })
  //   })
  //   describe('when has has prop type equal large ', () => {
  //     it('should has class .ls-modal-large', () => {
  //       wrapper.setProps({
  //         type: 'large'
  //       })
  //       setTimeout(() => {
  //         expect(wrapper.hasClass('ls-modal-large')).to.equal(false)
  //       }, 500)
  //     })
  //   })
    // describe('Testing props', () => {
    //   describe('When :footer prop is true ', () => {
    //     it('should has class .ls-modal-box', () => {
    //       let footer = wrapper.find('.ls-modal-footer')[0]
    //       // setTimeout(() => {
    //       // expect(footer.hasClass('ls-modal-footer')).to.equal(false)
    //       // }, 500)
    //     })
    //   })
      // describe('When :footer prop is false ', () => {
      //   it('dont should has class .ls-modal-box', () => {
      //     wrapper.setProps({
      //       footer: false
      //     })
      //     let footer = wrapper.find('.ls-modal-footer')[0]
      //     console.log(footer)
      //     setTimeout(() => {
      //       expect(footer.hasClass('ls-modal-footer')).to.equal(true)
      //     }, 500)
      //   })
      // })
      // describe('When :animate prop is true ', () => {
      //   it('should has class .ls-animated', () => {
      //     wrapper.setProps({
      //       animate: true
      //     })
      //     setTimeout(() => {
      //       expect(wrapper.hasClass('ls-animated')).to.equal(true)
      //     }, 500)
      //   })
      // })
      // describe('When :animate prop is false ', () => {
      //   it('should has class .ls-modal-box', () => {
      //     setTimeout(() => {
      //       expect(wrapper.hasClass('ls-animated')).to.equal(true)
      //     }, 500)
      //   })
      // })
    // })
  // })
})
