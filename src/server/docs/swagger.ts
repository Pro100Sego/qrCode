import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'QR Code Generator API',
            version: '1.0.0',
        },
    },
    apis: ['./src/server/routes/*.ts'],
};

export default swaggerJSDoc(options);