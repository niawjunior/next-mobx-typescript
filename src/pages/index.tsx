
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import { UserStore } from "../stores";

type Props = {
  userStore?: UserStore;
};

const IndexPage: NextPage = inject("userStore")(
  observer<Props>(({ userStore }) => {
    const store = userStore!
        return (
          <>
            <p>{store.title} 👋</p>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                store.changeTitle(e.target.value)
              }
            />
          </>
    );
  })
)

export default IndexPage
