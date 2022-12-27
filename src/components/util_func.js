
export const formatBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const classColor = (value) => {
    return parseFloat(value) > 0? 'positive' : 'negative'
}
