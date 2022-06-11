<script lang="ts">
  import plus from "./assets/plus.svg";
  import { crossfade, fly, scale, fade, slide } from "svelte/transition";
  import type {
    Character,
    NumField,
    StringField,
    StringFieldOptional,
    Field,
  } from "./types/character";

  let addModalOpen = false;

  let nameField: StringField = {
    id: 0,
    label: "name",
    required: false,
    type: "string",
    value: "newbert",
  };

  let ageField: NumField = {
    id: 1,
    label: "age",
    required: false,
    type: "num",
    value: 42,
  };

  let nextId = 3;

  let newbert: Character = {
    name: "newbert",
    fields: [nameField, ageField],
  };

  const handleClick = () => {
    const newField = {
      id: nextId,
      label: "height (cm)",
      required: true,
      type: "num",
      value: 168,
    } as NumField;
  };

  const addFieldAndCloseModal = (newField: Field) => {
    const idFixedField = { ...newField, id: nextId };
    nextId = nextId + 1;
    newbert.fields = [...newbert.fields, idFixedField];
    addModalOpen = false;
  };
</script>

<main>
  <h1>Hello Wrld</h1>
  <h2
    on:click={() => {
      addModalOpen = !addModalOpen;
    }}
  >
    {newbert.name}
  </h2>
  <div class="grid grid-cols-2">
    {#each newbert.fields as field (field.id)}
      <div
        class="mx-4 my-2 grid grid-cols-2 rounded-md bg-slate-500 p-3"
        transition:fly={{ y: 200, duration: 350 }}
      >
        <h3 class="text-left">{field.label}</h3>
        <!-- refactor this to a general field component -->
        {#if field.type == "string"}
          <input
            type="text"
            class="bg-slate-600"
            required={field.required}
            bind:value={field.value}
          />
        {/if}
        {#if field.type == "num"}
          <input
            type="number"
            required={field.required}
            class="bg-slate-600"
            bind:value={field.value}
          />
        {/if}
      </div>
    {/each}
  </div>

  <!-- <div class="flex items-center justify-center mt-6"> -->
  <div class="context-grid">
    {#if !addModalOpen}
      <div
        class="m-auto w-fit rounded-full bg-slate-600 "
        out:slide
        in:fly={{ y: 100, delay: 500 }}
      >
        <img
          src={plus}
          alt="Plus icon"
          on:click={() => {
            addModalOpen = !addModalOpen;
          }}
          class="plus-button m-auto w-[30px]"
        />
      </div>
      <!-- on:click={handleClick} -->
    {:else}
      <div
        class="dropdown z-20 m-auto min-h-[30px] w-1/4 rounded-md bg-slate-500
      py-1"
        in:scale={{ duration: 500 }}
        out:scale={{ duration: 500 }}
      >
        {#each newbert.fields as field}
          <h3
            class="m-2 rounded-md bg-slate-600 p-1"
            on:click={() => {
              addFieldAndCloseModal(field);
            }}
          >
            {field.label}
          </h3>
        {/each}
      </div>
    {/if}
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  input {
    padding-left: 0.5em;
    padding-right: 0.5em;
    text-align: center;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }

  .plus-button {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(154deg)
      brightness(120%) contrast(115%);
  }

  .context-grid {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  .context-grid > * {
    grid-row: 1;
    grid-column: 1;
  }
</style>
