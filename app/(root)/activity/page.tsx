import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Page() {
    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(user.id);

    if(!userInfo?.onboarded) redirect('/onboarding');

    const activity = await getActivity(userInfo._id);

    return (
      <section>
          <h1 className="head-text mb-1">Atividade</h1>
          <section>
            {activity.length > 0 ? (
              <>
                {activity.map((activity) => (
                  <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                    <article className="activity-card">
                      <Image
                      src={activity.author.image}
                      alt="Profile Picture"
                      width={20}
                      height={20}
                      className="rounded-full object-cover"
                      />
                      <p className="!text-small-regular text-light-1">
                        <span className="mr-1 text-purple-500">
                          {activity.author.name}
                        </span>
                        <span>
                          respondeu ao seu Thread
                        </span>
                      </p>
                    </article>
                  </Link>
                ))}
              </>
            ): <p className="!text-base-regular text-light-3">Sem atividades no momento</p>}
          </section>
      </section>
    )
  }
  
  export default Page;