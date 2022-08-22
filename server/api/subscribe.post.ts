import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: useRuntimeConfig().mailchimpApiKey,
  server: useRuntimeConfig().mailchimpServer,
})

export default defineEventHandler(async event => {
  const session = {
    activeRound: {
      votes: [{ userId: '', selection: 1 }],
    },
    pastRounds: [],
    users: [],
  }

  try {
    const body = await useBody(event)

    await mailchimp.lists.addListMember(useRuntimeConfig().mailchimpList, {
      email_address: body.email,
      status: 'subscribed',
    })

    return true
  } catch (error) {
    throw createError({ statusCode: 400, statusMessage: 'Subscription failed' })
  }
})
