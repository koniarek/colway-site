import React from 'react'

import './Form.css'

export default ({
  name = 'Simple Form',
  subject = '', // optional subject of the notification email
  action = ''
}) => (
  <form
    className='Form'
    name={name}
    action={action}
    data-netlify=''
    data-netlify-honeypot='_gotcha'
  >
    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='text'
        placeholder='ImiÄ'
        name='name'
        required
      />
    </label>
    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='email'
        placeholder='Email'
        name='email'
        required
      />
    </label>
    <label className='Form--Label has-arrow'>
      <select
        className='Form--Input Form--Select'
        name='type'
        defaultValue='Type of Enquiry'
        required
      >
        <option disabled hidden>
          Pytania
        </option>
        <option>UmÃ³w siÄ na zabieg</option>
        <option>SprawdÅº dostÄpnoÅÄ produktu</option>
        <option>Napisz wiadomoÅÄ</option>
      </select>
    </label>
    <label className='Form--Label'>
      <textarea
        className='Form--Input Form--Textarea'
        placeholder='WiadomoÅÄ'
        name='message'
        rows='10'
        required
      />
    </label>
    <input type='text' name='_gotcha' style={{ display: 'none' }} />
    {!!subject && <input type='hidden' name='subject' value={subject} />}
    <input type='hidden' name='form-name' value={name} />
    <input
      className='Button Form--SubmitButton'
      type='submit'
      value='WyÅlij'
    />
  </form>
)
