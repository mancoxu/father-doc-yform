/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import { YForm } from 'father-doc-yform';

const layout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

const Demo: React.FC<RouteComponentProps> = () => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const onFinish = async (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onSave = async (values: any) => {
    console.log('values:', values);
  };
  return (
    <>
      <Button type="link" onClick={() => setVisible(true)}>
        打开弹窗
      </Button>
      <Modal
        visible={visible}
        maskClosable
        destroyOnClose
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{ padding: 0 }}
        title="弹窗表单"
      >
        <YForm
          {...layout}
          required
          onFinish={onFinish}
          onSave={onSave}
          onFinishFailed={onFinishFailed}
          onCancel={handleCancel}
          params={{ type: 'create' }}
        >
          <YForm.Items className="ant-modal-body">
            {[{ type: 'input', name: 'age', label: '姓名' }]}
          </YForm.Items>
          <YForm.Items className="ant-modal-footer">
            {[
              {
                type: 'submit',
                componentProps: { reverseBtns: true, showBtns: { showSave: false } },
              },
            ]}
          </YForm.Items>
        </YForm>
      </Modal>
    </>
  );
};
export default Demo;
