export default defineEventHandler( async (event)=> {

    await new Promise( resolve => setTimeout(resolve, 2000));

    return sendError(event, createError({
        statusCode: 500,
        statusMessage: '¡Oh no! '
    }));

    return [
        {
            id: 1,
            title: 'Learn Nuxt',
            done: false
        },
        {
            id: 2,
            title: 'Learn Vue',
            done: false
        },
    ];
})