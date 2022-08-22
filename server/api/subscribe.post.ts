import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: useRuntimeConfig().mailchimpApiKey,
  server: 'us17',
})

export default defineEventHandler(async e => {
  const body = await useBody(e)
  console.log('here')
  console.log({ body })

  try {
    await mailchimp.lists.addListMember('00df368c5c', {
      email_address: body.email,
      status: 'subscribed',
    })
    return true
  } catch (error) {
    console.error(error.response.body)
    throw new Error('failed to subscribe')
  }
})
