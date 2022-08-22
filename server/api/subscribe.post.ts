import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: useRuntimeConfig().mailchimpApiKey,
  server: useRuntimeConfig().mailchimpServer,
})

export default defineEventHandler(async event => {
  try {
    const body = await useBody(event)

    await mailchimp.lists.addListMember(useRuntimeConfig().mailchimpList, {
      email_address: body.email,
      status: 'subscribed',
    })

    return true
  } catch (error) {
    console.error(error.response)
    throw createError({ statusCode: 400, statusMessage: error.response.text })
  }
})
