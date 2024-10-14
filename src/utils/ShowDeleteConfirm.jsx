import { ExclamationCircleFilled } from '@ant-design/icons'
import { Button, Modal, Space } from 'antd'
import { deleteUser } from '../Apis/usersApi'

const { confirm } = Modal
const showDeleteConfirm = (id) => {
  return confirm({
    title: `Do you want to delete this user with ID ${id}?`,
    icon: <ExclamationCircleFilled />,
    onOk() {
      return deleteUser(id)
        .then((response) => {
          return response
        })
        .catch((e) => console.log(e))
    },
    onCancel() {},
  })
}

export default showDeleteConfirm
