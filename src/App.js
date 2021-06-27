import React, { useEffect, useState } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import buildGraphQLProvider from 'ra-data-graphql-simple'
import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'

import { UserList } from './UserList'
import { DeviceList, DeviceEdit, DeviceCreate } from './device'
import Dashboard from './Dashboard'

import authProvider from './authProvider'

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => {
    const [dataProvider, setDataProvider] = useState(null)

    useEffect(() => {
        buildGraphQLProvider({
            clientOptions: { uri: 'http://localhost:4000' },
        })
            .then((dataProvider) => setDataProvider({ dataProvider }))
            .catch((error) => console.log(error))
    }, [])

    if (!dataProvider) return <div> Loading </div>
    return (
        <Admin
            dashboard={Dashboard}
            authProvider={authProvider}
            dataProvider={dataProvider}
        >
            <Resource
                name="posts"
                list={DeviceList}
                edit={DeviceEdit}
                // list={ListGuesser}
                // edit={EditGuesser}
                create={DeviceCreate}
                icon={PostIcon}
            />

            <Resource name="users" list={UserList} icon={UserIcon} />
        </Admin>
    )
}

export default App
