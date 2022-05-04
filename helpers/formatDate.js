import React from 'react'

export const formatDate = (date) => {
    const config = {
        year:"numeric",
        month:"long",
        day:"2-digit"
    }
    return new Date(date).toLocaleDateString('es-ES',config)
}
