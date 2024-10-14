import { ExclamationCircleFilled } from '@ant-design/icons'
import { Button, Modal, Space } from 'antd'
import { deleteUser } from '../Apis/usersApi'

const { confirm } = Modal
const showDeleteConfirm = (id) => {
  confirm({
    title: `Do you want to delete this user with ID ${id}?`,
    icon: <ExclamationCircleFilled />,
    onOk() {
      deleteUser(id)
        .then((response) => console.log(response))
        .catch((e) => console.log(e))
    },
    onCancel() {},
  })
}

export default showDeleteConfirm
