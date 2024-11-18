from openai import OpenAI
import uuid
from typing_extensions import override
from openai import AssistantEventHandler

client = OpenAI()

assistant = client.beta.assistants.create(
  name="artemis",
  instructions="You are an assistant, meant to help the user, Ryan, with day-to-day tasks. Answer whatever questions they have.",
  tools=[{"type": "code_interpreter"}],
  model="gpt-4o-mini",
)

message = input("enter message:")

thread = client.beta.threads.create()

message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content=message
)
 
run = client.beta.threads.runs.create_and_poll(
  thread_id=thread.id,
  assistant_id=assistant.id,
  instructions="Please address the user as Ryan."
)
  
if run.status == 'completed': 
  responses = client.beta.threads.messages.list(
    thread_id=thread.id
  )
  print(responses)
else:
  print(run.status)