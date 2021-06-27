import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
} from 'react-admin'

const DeviceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
)

export default DeviceList
