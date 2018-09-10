import {expect} from 'chai'
import sinon from 'sinon'
import * as hello from '../hello'

describe('sinon', function () {

    it('cannot replace a more indirect function :(', function () {
        sinon.stub(hello, 'angle').callsFake(function (name) {
            console.log('---------- mock function: angle ------------')
            return `**** ${name} ****`
        })
        const value = hello.words('sinon')
        console.log(value)
        expect(value).eq('Hello, **** sinon ****!')
    })

})