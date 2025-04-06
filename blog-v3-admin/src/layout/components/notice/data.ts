export interface ListItem {
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  description: string;
  status?: "" | "success" | "warning" | "info" | "danger";
  extra?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
}

export const noticesData: TabItem[] = [
  {
    key: "1",
    name: "通知",
    list: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "你收到了 12 份新周报",
        datetime: "一年前",
        description: "",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
        title: "你推荐的 前端高手 已通过第三轮面试",
        datetime: "一年前",
        description: "",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
        title: "这种模板可以区分多种通知类型",
        datetime: "一年前",
        description: "",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title:
          "展示标题内容超过一行后的处理方式，如果内容超过1行将自动截断并支持tooltip显示完整标题。",
        datetime: "一年前",
        description: "",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "左侧图标用于区分不同的类型",
        datetime: "一年前",
        description: "",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "左侧图标用于区分不同的类型",
        datetime: "一年前",
        description: "",
        type: "1"
      }
    ]
  },
  {
    key: "2",
    name: "消息",
    list: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "李白 评论了你",
        description: "长风破浪会有时,直挂云帆济沧海",
        datetime: "一年前",
        type: "2"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "李白 回复了你",
        description: "行路难，行路难，多歧路，今安在。",
        datetime: "一年前",
        type: "2"
      }
    ]
  },
  {
    key: "3",
    name: "代办",
    list: [
      {
        avatar: "",
        title: "vue-pure-admin 版本发布",
        description: "vue-pure-admin 版本发布",
        datetime: "",
        extra: "进行中",
        type: "3"
      }
    ]
  }
];
