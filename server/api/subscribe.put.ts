import mailchimp from '@mailchimp/mailchimp_marketing'

const { mailchimpApiKey, mailchimpServer, mailchimpList } = useRuntimeConfig()

mailchimp.setConfig({
  apiKey: mailchimpApiKey,
  server: mailchimpServer,
})

export default defineEventHandler(async event => {
  try {
    const body = await useBody(event)

    await mailchimp.lists.addListMember(mailchimpList, {
      email_address: body.email,
      status: 'subscribed',
    })

    return 'success'
  } catch (error) {
    console.error(error.response.text)
    throw createError({ statusCode: 400, statusMessage: error.response.text })
  }
})
